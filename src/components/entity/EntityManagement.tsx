import React, { useState } from "react";
// Assuming these components are also being converted or are .jsx files
import EntityListView from "./EntityListView";
import EntityForm from "./EntityForm/EntityForm";
import ViewEntityProfile from "./ViewEntityProfile";

// --- Types & Interfaces ---

export type EntityType = "staff" | "student" | "parent";

export interface Entity {
  id: string;
  // Index signature allows accessing dynamic fields (e.g., entity['fullName'])
  [key: string]: any; 
}

export interface EntityConfigItem {
  title: string;
  idPrefix: string;
  steps: string[];
  fields: string[];
  entityType: EntityType;
}

interface EntityManagementProps {
  entityType?: EntityType;
  initialData?: Entity[];
  config?: Partial<EntityConfigItem>;
}

type ViewMode = "list" | "add" | "edit" | "view";

// --- Component ---

const EntityManagement: React.FC<EntityManagementProps> = ({
  entityType = "staff",
  initialData = [],
  config,
}) => {
  const [entities, setEntities] = useState<Entity[]>(initialData);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  // formData is Partial because it might be empty during creation
  const [formData, setFormData] = useState<Partial<Entity>>({});
  const [searchTerm, setSearchTerm] = useState<string>("");

  const itemsPerPage = 10;

  const entityConfig: Record<EntityType, EntityConfigItem> = {
    staff: {
      title: "Staff",
      idPrefix: "OSA-STAFF-",
      steps: ["Personal Info", "Work Info", "Next of Kin"],
      fields: ["fullName", "phoneNumber", "emailAddress", "role"],
      entityType: "staff",
    },
    student: {
      title: "Students",
      idPrefix: "OSA-STU-",
      steps: ["Personal Info", "Parent Info", "Class Info"],
      fields: ["fullName", "class", "contact", "feesStatus"],
      entityType: "student",
    },
    parent: {
      title: "Parents",
      idPrefix: "OSA-PAR-",
      steps: ["Personal Info", "Child Info", "Contact Info"],
      fields: ["fullName", "phoneNumber", "emailAddress", "childName"],
      entityType: "parent",
    },
  };

  const cfg: EntityConfigItem = { ...entityConfig[entityType], ...config };

  const generateId = (): string => {
    return `${cfg.idPrefix}${String(entities.length + 1).padStart(4, "0")}`;
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdd = () => {
    setFormData({});
    setCurrentStep(1);
    setViewMode("add");
  };

  const handleSave = () => {
    if (viewMode === "add") {
      // Cast newEntity to Entity since we generate the ID here
      const newEntity = { id: generateId(), ...formData } as Entity;
      setEntities([...entities, newEntity]);
    } else if (viewMode === "edit" && selectedEntity) {
      setEntities(
        entities.map((e) =>
          e.id === selectedEntity.id ? { ...e, ...formData } : e
        )
      );
    }
    setViewMode("list");
  };

  const handleView = (entity: Entity) => {
    setSelectedEntity(entity);
    setViewMode("view");
  };

  // Entity is optional here because ViewEntityProfile calls onEdit without args
  const handleEdit = (entity?: Entity) => {
    const toEdit = entity || selectedEntity;
    if (toEdit) {
      setSelectedEntity(toEdit);
      setFormData(toEdit);
      setViewMode("edit");
      setCurrentStep(1);
    }
  };

  const handleDelete = (id: string) => {
    setEntities(entities.filter((e) => e.id !== id));
  };

  const filteredEntities = entities.filter((e) =>
    cfg.fields.some((f) =>
      (e[f] || "").toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredEntities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {viewMode === "list" && (
        <EntityListView
          entityType={entityType}
          entities={currentData}
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

      {/* {(viewMode === "add" || viewMode === "edit") && ( */}
      {(viewMode === "add") && (
        <EntityForm
          entityType={entityType}
          // isEdit={viewMode === "edit"}
          isEdit={false}
          currentStep={currentStep}
          formData={formData}
          onSave={handleSave}
          onBack={() => {
            if (currentStep > 1) {
              setCurrentStep(currentStep - 1);
            } else {
              setViewMode("list");
            }
          }}
          onNext={() => setCurrentStep(currentStep + 1)}
          onChange={handleInputChange}
          config={cfg}
        />
      )}

      {(viewMode === "view" || viewMode === "edit") && selectedEntity && (
        <ViewEntityProfile
          entity={selectedEntity}
          entityType={entityType}
          onBack={() => setViewMode("list")}
          // Passed without args, relies on selectedEntity state in handleEdit
          onSave={handleSave}
          onEdit={() => handleEdit()} 
          config={cfg}
          planMode={viewMode}
        />
      )}
    </>
  );
};

export default EntityManagement;