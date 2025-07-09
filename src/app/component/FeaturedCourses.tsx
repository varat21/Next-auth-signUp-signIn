// import Link from "next/link";
// import React from "react";
// // import courseData from "../../data/music_courses.json";

// import { BackgroundGradient } from "./ui/background-gradient";

// interface Courses {
//   id: number;
//   title: String;
//   slug: String;
//   description: String;
//   price: number;
//   instructor: String;
//   isFeatured: boolean;
// }
// // export default function FeaturedCourses() {
// //   const featuredCourses: Courses[] = courseData.courses.filter(
// //     (course: Courses) => course.isFeatured
// //   );

//   return (
//     <div>
//       <div className="text-center">
//         <h2 className="text-base text-teal-600 font-semibold tracking-wide font-medium mb-10rem">
//           Featured Courses
//         </h2>
//         <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white  sm:text:4xl">
//           Learn Best In The World
//         </p>
//       </div>
//       <div className="mt-10">
//         <div
//           className="grid grid-col-1 sm:grid-cols-2
//     lg:grid-cols-3 gap-8 justify-center"
//         >
//           {featuredCourses.map((course: Courses) => (
//             <div key={course.id} className="flex justify-center">
//               <BackgroundGradient
//               className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
//               >
//                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"> 
//                 <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
//                 <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.description}</p>
//                 <Link href={`/courses/${course.slug}`} className="underline mt-4">
//                 View More</Link>
//                </div>
//               </BackgroundGradient>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-10 text-center">
//         <Link href={"/courses"}>
//           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
//               View All Courses
//             </span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
