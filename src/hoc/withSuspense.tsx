import React, {Suspense} from 'react';

// export const withSuspense:WPC = (Component: any) => {
//     return (props: WPC) => {
//         return   <Suspense fallback={<div>Loading...</div>}><Component {...props}/> </Suspense>
//     }
// }

// export function withSuspense<P>(Component: React.ComponentType<P>) {
//     return (props: Partial<P>) => {
//         return (
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Component  />
//             </Suspense>
//         );
//     };
// }

// export function withSuspense<P extends {}>(Component: React.ComponentType<P>): (props: P) => React.ReactNode {
//     return (props: P) => {
//         return (
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Component {...props} />
//             </Suspense>
//         );
//     };
// }