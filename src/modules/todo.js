export default function Todo({
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  complete = false,
}) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    complete,
  };
}
