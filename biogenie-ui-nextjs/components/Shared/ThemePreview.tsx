export default function ThemePreview() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-white text-black p-4 border rounded shadow">
        <h4 className="text-sm font-semibold mb-2">Light Mode Preview</h4>
        <p className="text-sm">Chat input, sidebar, and bubble layout shown in light mode.</p>
      </div>
      <div className="bg-[#1e1e1e] text-white p-4 border border-gray-700 rounded shadow">
        <h4 className="text-sm font-semibold mb-2">Dark Mode Preview</h4>
        <p className="text-sm">Chat input, sidebar, and bubble layout shown in dark mode.</p>
      </div>
    </div>
  );
}
