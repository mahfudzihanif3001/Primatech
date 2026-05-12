"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function createPortfolio(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const thumbnailFile = formData.get("thumbnail") as File;
  const galleryFiles = formData.getAll("gallery") as File[];

  if (!title || !description || !thumbnailFile || thumbnailFile.size === 0) {
    return { error: "Judul, deskripsi, dan thumbnail harus diisi." };
  }

  try {
    // 1. Upload Thumbnail
    const thumbnailBuffer = Buffer.from(await thumbnailFile.arrayBuffer());
    const thumbnailUrl = await uploadToCloudinary(thumbnailBuffer, "primatech/thumbnails");

    // 2. Upload Gallery Files (if any)
    const galleryUrls: string[] = [];
    for (const file of galleryFiles) {
      if (file.size > 0) {
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const url = await uploadToCloudinary(fileBuffer, "primatech/gallery");
        galleryUrls.push(url);
      }
    }

    // 3. Save to Database
    await prisma.portfolio.create({
      data: {
        title,
        description,
        imageUrl: thumbnailUrl,
        images: {
          create: galleryUrls.map((url) => ({ url })),
        },
      },
    });

    revalidatePath("/admin/portfolio");
    revalidatePath("/portofolio");
    return { success: true };
  } catch (error) {
    console.error("Upload error:", error);
    return { error: "Terjadi kesalahan saat mengunggah gambar." };
  }
}

export async function deletePortfolio(id: string) {
  await prisma.portfolio.delete({
    where: { id },
  });

  revalidatePath("/admin/portfolio");
  revalidatePath("/portofolio");
}
