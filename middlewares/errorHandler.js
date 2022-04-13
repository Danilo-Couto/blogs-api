/* module.exports = (error, _req, res, _next) => {
  if (error.isJoi) {
    const newStatus = error.details[0].type.includes('.min') ? 422 : 400;
    
    return res.status(newStatus)
      .json({ message: error.details[0].message });
  }

  const statusByErrorCode = {
    invalidData: 404,
    alreadyExists: 409,
  };

  if (error.code) return res.status(statusByErrorCode[error.code]).json({ message: error.message });

  console.log('error:', error);

  return res.status(500).json({ error });
};
 */
/* module.exports = (error, _req, res, next)
  console.error(error);
  if (error instanceof SyntaxError &6 error.message.includes( 'Unexpected string in JSON')) {
   res.status(400).json( { message: 'Invalid body syntax' });
  return res.status(500).json({ message: 'Something went wrong here, please try again later' });
   */
  
  module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }
    
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      message: err.message });
  }

  console.error('erro:', err);

  return res.status(500).json({
    message: `Internal server error: ${err.message}`,
    });
};
