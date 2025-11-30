// // route.js
// import { db } from "@/lib/db"; // sizin database bağlantınız

// export async function GET() {
//   // Database sorğuları
//   const usersCount = await db.user.count();
//   const ordersCount = await db.order.count();
//   const revenueTotal = await db.order.sum("amount");
//   const feedbackCount = await db.feedback.count();

//   return new Response(
//     JSON.stringify({
//       users: usersCount,
//       orders: ordersCount,
//       revenue: revenueTotal,
//       feedback: feedbackCount
//     }),
//     { status: 200 }
//   );
// }


// route.js - test üçün hardcoded dəyərlər
// export async function GET() {
//   return new Response(
//     JSON.stringify({
//       users: 120,
//       orders: 45,
//       revenue: 8200,
//       feedback: 32
//     }),
//     { status: 200 }
//   );
// }
