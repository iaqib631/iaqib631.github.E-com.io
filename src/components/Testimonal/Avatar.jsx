const Avatar = ({ initials }) => (
  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
    {initials}
  </div>
);

export default Avatar;
