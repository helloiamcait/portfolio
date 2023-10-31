
---
title: Images exported from InDesign are pixelated
bookToC: true
---

# Images exported from InDesign are pixelated

Are images in files exported from InDesign pixelated? There are two possible solutions depending on how the images look in the InDesign file:

1. **If images look pixelated in InDesign,** then [Image resolution is too low](#problem-1-images-resolution-is-too-low)
2. **If images *do not* look pixelated in InDesign,** then [Performance Display settings are not optimized](#problem-2-performance-display-settings-are-not-optimized)

---

## Problem 1: Images resolution is too low

If the images exported from InDesign also look pixelated in the InDesign file, then the resolution of the images is too low. Follow these steps to check image resolution and replace low-resolution images:

1. In InDesign, click on a pixelated image and choose **Window>Info** to open the Info panel. 
2. The **Effective ppi** in the Info Panel is the image resolution within the document, and it should match one of the following:
	- **For print** optimal image resolution is 300 ppi. 
	- **For screen display** optimal image resolution is 100 ppi. 
3. If the image resolution is below the optimal ppi, then you need to increase the image resolution from the image source file. 
    -  **Note:** The process for optimizing image resolution differs from project-to-project. However, most graphics editing software will give you the option to change this variable in the export window.
4. In InDesign, relink the pixelated image to the new high-resolution image. Adobe describes how to do this in the **Replace a link with a different source file** section of Adobe's [**Linked and embedded graphics**](https://helpx.adobe.com/indesign/using/graphics-links.html) help page.

## Problem 2: Performance Display settings are not optimized

If the images exported from InDesign *are not* pixelated in the InDesign file, then you need to adjust the Performance Display settings by following these steps:

1. Navigate to **InDesign > Preferences > Display Performance**
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
