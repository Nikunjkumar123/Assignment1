import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Checkbox from '@mui/material/Checkbox';

// Hardcoded JSON data for departments and sub-departments
const departmentsData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  // Toggle expand/collapse for a department
  const toggleExpand = (department: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [department]: !prevExpanded[department],
    }));
  };

  // Toggle selection for a department or sub-department
  const toggleSelect = (deptOrSubDept: string) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [deptOrSubDept]: !prevSelected[deptOrSubDept],
    }));
  };

  // Select all sub-departments when a department is selected
  const selectDepartment = (department: string) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected };
      departmentsData
        .find((dept) => dept.department === department)
        ?.sub_departments.forEach((subDept) => {
          newSelected[subDept] = true;
        });
      return newSelected;
    });
  };

  // Handle selection of a sub-department, and update parent department if all sub-departments are selected
  const handleSubDeptSelect = (department: string, subDept: string) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected, [subDept]: !prevSelected[subDept] };
      const allSubDeptsSelected = departmentsData
        .find((dept) => dept.department === department)
        ?.sub_departments.every((sub) => newSelected[sub]);

      if (allSubDeptsSelected) {
        newSelected[department] = true;
      } else {
        newSelected[department] = false;
      }

      return newSelected;
    });
  };

  return (
    <div>
      {departmentsData.map((dept, index) => (
        <div key={index}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            {expanded[dept.department] ? (
              <ExpandMoreIcon style={{ cursor: 'pointer' }} onClick={() => toggleExpand(dept.department)} />
            ) : (
              <ChevronRightIcon style={{ cursor: 'pointer' }} onClick={() => toggleExpand(dept.department)} />
            )}
            <Checkbox
              checked={selected[dept.department] || false}
              onChange={() => {
                toggleSelect(dept.department);
                selectDepartment(dept.department);
              }}
            />
            <strong style={{ marginLeft: '8px', cursor: 'pointer' }}>{dept.department}</strong>
          </div>
          {expanded[dept.department] && (
            <ul style={{ paddingLeft: '20px' }}>
              {dept.sub_departments.map((subDept, subIndex) => (
                <li key={subIndex}>
                  <Checkbox
                    checked={selected[subDept] || false}
                    onChange={() => handleSubDeptSelect(dept.department, subDept)}
                  />
                  {subDept}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
