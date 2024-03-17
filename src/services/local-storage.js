export const localStorageService = {
  query,
  get,
  post,
  remove,
};

function query(entityType) {
  let entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return entities;
}

function get(entityType, entityId) {
  let entities = query(entityType);
  let entity = entities.find((entity) => entity._id === entityId);
  return entity;
}

function post(entityType, newEntity) {
  let entities = query(entityType);

  entities.push(newEntity);
  _save(entityType, entities);

  return newEntity;
}

function remove(entityType, cityKey) {
  let entities = query(entityType);

  let idx = entities.findIndex((entity) => entity.cityKey === cityKey);
  if (idx !== -1) {
    entities.splice(idx, 1);

    _save(entityType, entities);
  } else {
    throw new Error(`Deletion failed, cannot find entity with cityKey: ${cityKey} in: ${entityType}`);
  }
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
