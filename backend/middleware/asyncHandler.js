//This is a async handler to wrap our endpoints asynchrnously, because mongoose returns things as promises

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next).catch(next));
};
export default asyncHandler;
