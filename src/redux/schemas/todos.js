import { schema, normalize, denormalize } from 'normalizr';

const todo = new schema.Entity('todos', {}, { idAttribute: 'id' });
const todoSchema = [todo];

export function normalizeTodos(todos) {
  return normalize(todos, todoSchema);
}

export function denormalizeTodos(result, entities) {
  return denormalize(result, todoSchema, entities);
}
