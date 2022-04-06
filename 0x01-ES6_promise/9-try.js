export default function guardrail(mathFunction) {
  const queue = [];
  const string = 'Guardrail was processed';
  try {
    const value = mathFunction();
    queue.push(value, string);
  } catch (e) {
    queue.push(`Error: ${e.message}`, string);
  }
  return queue;
}
