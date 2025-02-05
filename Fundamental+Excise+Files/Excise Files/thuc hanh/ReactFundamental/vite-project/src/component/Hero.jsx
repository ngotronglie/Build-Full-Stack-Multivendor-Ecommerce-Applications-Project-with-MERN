const Hero = (props) => {
  const item = props.item || {}; // Dùng object rỗng nếu item không tồn tại

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">This is from Hero</h1>
      <p>Name: {item.name || 'No Name Provided'}</p>
      <p>Age: {item.age || 'No Age Provided'}</p>
      <p>City: {item.city || 'No City Provided'}</p>
    </div>
  );
}
export default Hero;