module.exports = {
  "type": "object",
  "properties": {
    "todos": {
      "type": "array",
      "minItems": 12,
      "maxItems": 12,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "minimum": 1
          },
          "completed": {
            "type": "boolean"
          },
          "text": {
            "type": "string"
          }
        },
        "required": ["id", "completed", "text"]
      }
    }
  },
  "required": ["todos"]
};
