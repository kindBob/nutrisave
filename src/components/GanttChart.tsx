export default function GanttChart() {
  const data = [
    {
      id: 1,
      task: "Project Planning",
      start: "2024-09-30",
      end: "2024-10-03",
      duration: 4,
      dependencies: "None",
    },
    {
      id: 2,
      task: "Research and Design",
      start: "2024-10-04",
      end: "2024-10-09",
      duration: 6,
      dependencies: "Project Planning",
    },
    {
      id: 3,
      task: "Frontend Setup",
      start: "2024-10-10",
      end: "2024-10-17",
      duration: 8,
      dependencies: "Research and Design",
    },
    {
      id: 4,
      task: "Feature Implementation",
      start: "2024-10-18",
      end: "2024-11-22",
      duration: 36,
      dependencies: "Frontend Setup",
    },
    {
      id: 5,
      task: "Testing and Debugging",
      start: "2024-11-23",
      end: "2024-11-29",
      duration: 7,
      dependencies: "Feature Implementation",
    },
    {
      id: 6,
      task: "Final Deployment",
      start: "2024-11-30",
      end: "2024-12-04",
      duration: 5,
      dependencies: "Testing and Debugging",
    },
  ];

  return (
    <div className="gantt-chart">
      <h2 className="section-title">Project Timeline</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Duration (Days)</th>
              <th>Dependencies</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.task}</td>
                <td>{row.start}</td>
                <td>{row.end}</td>
                <td>{row.duration}</td>
                <td>{row.dependencies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="section-subtitle">
        Image{" "}
        <a
          target="_blank"
          href="https://res.cloudinary.com/dbasroxpf/image/upload/v1732903045/nutrisave_gantt-chart.png"
          className="list-style-1__point"
          style={{ textTransform: "none" }}>
          link
        </a>
      </h3>
    </div>
  );
}
