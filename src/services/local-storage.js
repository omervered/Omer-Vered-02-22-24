export const localStorageService = {
  query,
  get,
  post,
  put,
  remove,
};

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return entities;
}

function get(entityType, entityId) {
  var entities = query(entityType);
  var entity = entities.find((entity) => entity._id === entityId);
  return entity;
}

function post(entityType, newEntity) {
  _save(entityType, newEntity);
  return newEntity;
}

function remove(entityType, entityId) {
  var entities = query(entityType);

  var idx = entities.indexOf(entityId);
  if (idx < 0) {
    throw new Error(`Deletion failed, cannot find entity with id: ${entityId} in: ${entityType}`);
  }

  entities.splice(idx, 1);
  _save(entityType, entities);
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
