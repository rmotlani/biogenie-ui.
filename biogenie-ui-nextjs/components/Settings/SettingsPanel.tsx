export default function SettingsPanel() {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-medium mb-3">Settings</h3>
      <div className="space-y-3">
        <div>
          <label className="text-sm">Theme</label>
          <select className="block w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Model</label>
          <select className="block w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600">
            <option>GPT-4</option>
            <option>BioMedLM</option>
          </select>
        </div>
      </div>
    </div>
  );
}
