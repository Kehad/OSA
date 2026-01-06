// src/components/entity/EntityManagement.jsx
import { useState } from "react";
import EntityListView from "./EntityListView";
import EntityForm from "./EntityForm/EntityForm";
import ViewEntityProfile from "./ViewEntityProfile";

const EntityManagement = ({
  entityType = "staff", // 'staff' | 'student' | 'parent'
  initialData = [],
  config,
}) => {
  const [entities, setEntities] = useState(initialData);
  console.log(entities)
  const [viewMode, setViewMode] = useState("list");
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 10;

  const entityConfig = {
    staff: {
      title: "Staff",
      idPrefix: "OSA-STAFF-",
      steps: ["Personal Info", "Work Info", "Next of Kin"],
      fields: ["fullName", "phoneNumber", "emailAddress", "role"],
      entityType: entityType,

    },
    student: {
      title: "Students",
      idPrefix: "OSA-STU-",
      steps: ["Personal Info", "Parent Info", "Class Info"],
      fields: ["fullName", "class", "conteact", "feesStatus"],
      entityType: entityType,
    },
    parent: {
      title: "Parents",
      idPrefix: "OSA-PAR-",
      steps: ["Personal Info", "Child Info", "Contact Info"],
      fields: ["fullName", "phoneNumber", "emailAddress", "childName"],
      entityType: entityType,

    },
  };

  const cfg = { ...entityConfig[entityType], ...config };

  const generateId = () => {
    return `${cfg.idPrefix}${String(entities.length + 1).padStart(4, "0")}`;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdd = () => {
    setFormData({});
    setCurrentStep(1);
    setViewMode("add");
  };

  const handleSave = () => {
    const newEntity = { id: generateId(), ...formData };
    if (viewMode === "add") {
      setEntities([...entities, newEntity]);
    } else if (viewMode === "edit") {
      setEntities(entities.map((e) => (e.id === selectedEntity.id ? { ...e, ...formData } : e)));
    }
    setViewMode("list");
  };

  const handleView = (entity) => {
    setSelectedEntity(entity);
    setViewMode("view");
  };

  const handleEdit = (entity) => {
    const toEdit = entity || selectedEntity;
    setSelectedEntity(toEdit);
    setFormData(toEdit);
    setViewMode("edit");
    setCurrentStep(1);
  };

  const handleDelete = (id) => {
    setEntities(entities.filter((e) => e.id !== id));
  };

  const filteredEntities = entities.filter((e) =>
    cfg.fields.some((f) => (e[f] || "").toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredEntities.slice(startIndex, startIndex + itemsPerPage);
  console.log(currentData)

  return (
    <>
      {viewMode === "list" && (
        <EntityListView
          entityType={entityType}
        //   entities={currentData}
          entities={initialData}
          totalItems={filteredEntities.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          onAdd={handleAdd}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPageChange={setCurrentPage}
          config={cfg}
        />
      )}

      {(viewMode === "add" || viewMode === "edit") && (
        <EntityForm
          entityType={entityType}
          isEdit={viewMode === "edit"}
          currentStep={currentStep}
          formData={formData}
          onSave={handleSave}
          onBack={() => (currentStep > 1 ? setCurrentStep(currentStep - 1) : setViewMode("list"))}
          onNext={() => setCurrentStep(currentStep + 1)}
          onChange={handleInputChange}
          config={cfg}
        />
      )}

      {viewMode === "view" && selectedEntity && (
        <ViewEntityProfile
          entity={selectedEntity}
          entityType={entityType}
          onBack={() => setViewMode("list")}
          onEdit={() => handleEdit()}
          config={cfg}
        />
      )}
    </>
  );
};

export default EntityManagement;