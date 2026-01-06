// src/components/entity/EntityListView.jsx
import { Plus, Search } from "lucide-react";
import Button from "../ui/Button";
import EmptyState from "./EmptyState";
import EntityTable from "./EntityTable";
import Pagination from "./Pagination";

const EntityListView = ({
  entityType,
  entities,
  totalItems,
  currentPage,
  itemsPerPage,
  searchTerm,
  onSearch,
  onAdd,
  onView,
  onEdit,
  onDelete,
  onPageChange,
  config,
}) => {
  console.log(entities, config);
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto">
        <div className="flex items-center justify-end">
          <Button
            text={`Add new ${entityType}`}
            onClick={onAdd}
            leftIcon={Plus}
            size="lg"
          />
        </div>

        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              {config.title} List
            </h1>
            {totalItems > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
                {totalItems}
              </p>
            )}
          </div>
        </div>

        {entities?.length === 0 ? (
          <EmptyState entityType={entityType} onAddClick={onAdd} />
        ) : (
          <>
            <EntityTable
              entities={entities}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
              config={config}
            />
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPrevious={() => onPageChange(Math.max(1, currentPage - 1))}
              onNext={() => onPageChange(currentPage + 1)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EntityListView;
