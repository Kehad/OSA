import headerImg from '../../../assets/header.png';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-white">
        <h3 className="text-4xl font-bold leading-[56px] text-left w-[70%]">
          Welcome to Oluwatosin Success Academy
        </h3>
        <p className="text-lg font-medium leading-[30px] tracking-[0.03em] w-[70%] mt-4 text-left">
          Where we shape the lives of children to build effective future
          leaders.
        </p>
      </div>
      <div className="w-[600p] size-1/2	">
        <img
          src={headerImg}
          className="w-[100%} h-[100%]"
          alt="Image of 3 young students"
        />
      </div>
    </div>
  );
}

export default Header