// src/components/entity/ViewEntityProfile.jsx
import Button from "../ui/Button";

const ViewEntityProfile = ({ entity, entityType, onBack, onEdit, config }) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">View {entityType}</h1>
          <Button text="Edit" onClick={onEdit} />
        </div>
        <div className="space-y-6">
          {Object.entries(entity).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <p className="text-gray-900">{value || "—"}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button text="Back" onClick={onBack} variant="outline" />
          <Button text="Edit" onClick={onEdit} />
        </div>
      </div>
    </div>
  );
};

export default ViewEntityProfile;