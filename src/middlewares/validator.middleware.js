export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    console.log("passed");
    next();
  } catch (error) {
    return res
      .status(400)
      .json(error.errors.map((error) => error.message));

  }
};
