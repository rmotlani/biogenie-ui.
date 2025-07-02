export default function ProjectModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600">
              <option>Active</option>
              <option>Paused</option>
              <option>Archived</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">Cancel</button>
            <button className="px-4 py-2 bg-biogreen text-white rounded-md">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
