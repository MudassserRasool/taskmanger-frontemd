export const modalStyle = (width) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: width ? width : 450,
  width: 'auto',
  bgcolor: 'white',
  borderRadius: 5,
  boxShadow: 24,
});
