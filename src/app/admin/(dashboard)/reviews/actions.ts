"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createReview(formData: FormData) {
  const customerName = formData.get("customerName") as string;
  const company = formData.get("company") as string;
  const content = formData.get("content") as string;
  const rating = parseInt(formData.get("rating") as string);

  if (!customerName || !content || !rating) {
    return { error: "Nama pelanggan, isi review, dan rating harus diisi." };
  }

  await prisma.review.create({
    data: {
      customerName,
      company: company || null,
      content,
      rating,
    },
  });

  revalidatePath("/admin/reviews");
  revalidatePath("/");
}

export async function deleteReview(id: string) {
  await prisma.review.delete({
    where: { id },
  });

  revalidatePath("/admin/reviews");
  revalidatePath("/");
}
