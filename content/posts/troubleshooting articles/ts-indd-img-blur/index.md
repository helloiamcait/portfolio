---
title: PDF exported from InDesign has pixelated images
date: 2023-10-29T9:03:20-08:00
draft: true
tags: [
    "troubleshooting",
    "InDesign",
]
---

# Pixelated images in a PDF exported from InDesign
If images appear pixelated in a PDF that was exported from an InDesign file, follow the steps in this troubleshooting article.

---

## Check the format of the images in the InDesign project file

1. Open the InDesign project file and find an image that looks pixelated in the exported PDF. 
2. **Click** on the pixelated image in the InDesign file.
3. Open the **Links** panel by typing **Shift+Command+D** (for MacOs) or **Shift+Control+D** (for Windows).
4. Identify the method to follow based on the number of image files that are in SVG format:
    * If some or none of the images in the **Links** panel end in _.svg_, follow the **Method 1: Relink high-quality images** instructions.
    * If all of the images in the **Links** panel end in _.svg_, follow the **Method 2: Adjust Performance Display settings** instructions.


---

## Method 1: Relink to high quality images 
If some or none of the images in the **Links** panel end in _.svg_, then they are linked to the wrong image files. The PNG and JPEG image files used in this project are not high enough resolution to use in the handouts. You need to relink the images to their SVG versions before exporting the document as a PDF again.

{{< tabs "relink-img" >}}
{{< tab "MacOS" >}}
1. In the Links panel, select an image that does not end in _.svg_.
2. **Control-click** the image name and select **Reveal in Finder**.
3. In Finder, press **Command+3** to view as Columns. 
4. In the right column, scroll down and take note of the **Dimensions** and **Resolution**.
5. Look in the folder for other versions of the image. If there is a version that ends in _.svg_, then skip to Step 7. Otherwise, repeat Step 4 for each version of the image that you find. 
    * **Note:** Different versions of the same image should have the same name, but with different suffixes. For example, _leaf-1.png_, _leaf-2.png_, _leaf-3.jpg_ are different versions of the same image.
6. Identify the version of the image with the highest resolution and the largest dimensions.
7. Navigate back to InDesign and reopen the **Links** panel. **Control-click** on the highlighted image, click **Relink**, select the name of the version that ends in _.svg_ or that you identified in Step 6, and press **Open**.
8. Repeat steps 1–7 for each image that looks pixelated in the exported PDF. {{< /tab >}}
{{< tab "Windows" >}}
1. In the Links panel, select an image that does not end in _.svg_.
2. **Right-click** the image name and select **Reveal in Explorer**.
3. In Explorer, press **Alt+Enter** to open the properties window. 
4. Take note of the **Dimensions** and **Resolution**.
5. Look in the folder for other versions of the image. If there is a version that ends in _.svg_, then skip to Step 7. Otherwise, repeat Step 4 for each version of the image that you find. 
    * **Note:** Different versions of the same image should have the same name, but with different suffixes. For example, _leaf-1.png_, _leaf-2.png_, _leaf-3.jpg_ are different versions of the same image.
6. Identify the version of the image with the highest resolution and the largest dimensions.
7. Navigate back to InDesign and reopen the **Links** panel. **Right-click** on the highlighted image, click **Relink**, select the name of the version that ends in _.svg_ or that you identified in Step 6, and press **Open.**
8. Repeat steps 1–7 for each image that looks pixelated in the exported PDF. {{< /tab >}}
{{< /tabs >}}

---

## Method 2: Adjust Performance Display settings
If all of the images in the **Links** panel end in _.svg_, then the Performance Display settings are not set properly. You need to adjust the Performance Display settings before exporting the document as a PDF again.

1. In the menu bar, select **InDesign > Preferences > Display Performance**
2. Adjust the settings to match the following:
    * **Default View:** High Quality
    * **Preserve Object-Level Display Settings** is unchecked
    * **Adjust View Settings:** High Quality
    * **Raster Images:** High Resolution
    * **Vector Graphics:** High Resolution
    * **Transparency:** High Quality
    * **Enable Anti-aliasing** is checked
    * **Greek Type Below:** 7 pt
3. Click **OK**.

---

{{< hint info >}}
To find out more about this document, visit my portfolio website.
{{< button href="https://iamcait.com" >}}Learn More{{< /button >}}
{{< /hint >}}