// // pages/StudentsPage.jsx

import { useState } from "react";
import EntityManagement from "@/components/entity/EntityManagement";

export default function Parents() {
  // const [staffList, setStaffList] = useState([]);
const [parentsList, setParentsList] = useState([
    {
      id: "OSA-24S-0001",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",
      title: "Mr",
      firstName: "John",
      lastName: "Doe",
      FatherphoneNumber: '08097779392',
      FatherEmailAddress: "sas@gmail.com",  

    },
    {
      id: "OSA-24S-0002",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-0003",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-0004",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-0005",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-0006",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-0007",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
     {
      id: "OSA-24S-0008",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-0009",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-00010",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-00011",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    },
    {
      id: "OSA-24S-00012",
      parentName: "John Doe",
      noOfChildren: 2,
      contact: "07012345678",
      dateRegistered: "17-09-2025",
      childName: "John Child",    
    }
  
  ]);
  return <EntityManagement entityType="parent" initialData={parentsList} />;
}