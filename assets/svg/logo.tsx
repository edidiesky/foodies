import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'}>
      <img className='w-40' src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a64272542f3_true-origins-logo.svg" alt="" />
    </Link>
  );
};


export default Logo;