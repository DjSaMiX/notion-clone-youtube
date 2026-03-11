"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  // Protect route on the server
  auth().protect();

  // Get the current user's sessionClaims
  const { sessionClaims } = await auth();

  // Create a new document in Firestore
  const docColllectionRef = adminDb.collection("documents");
  const docRef = await docColllectionRef.add({
    title: "New Doc",
  });

  // Store the user/room info in Firestore
  await adminDb
    .collection("users")
    .doc(sessionClaims?.email!)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userID: sessionClaims?.email!,
      role: "owner",
      createdAt: new Date(),
      roomID: docRef.id,
    });

  // Return the new document ID
  return { docID: docRef.id };
}
