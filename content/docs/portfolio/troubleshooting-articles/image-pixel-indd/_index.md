
---
title: "Pixelated graphics in PDF exported from InDesign"
bookToC: true
---

# Troubleshooting pixelated graphics in a PDF exported from InDesign
---

## Problem

You export a PDF from InDesign and graphics in the PDF look pixelated.

There are two main causes for pixelated graphics in a PDF exported from InDesign:
-  Resolution of the graphic is too low
-  Performace display settings are not optimized in InDesign

Resolve this issue by using the steps in this article.

---

## Solution

### Step 1: Check the resolution of pixelated graphics

1. In InDesign, click on a graphic and choose **Window>Info** to open the Info panel. 
2. The **Effective ppi** in the Info Panel represents the resolution of the graphic within the document. It should match one of the following:
	- **For print:** optimal graphics display resolution is 300 ppi. 
	- **For screen display:** optimal graphics display resolution is 100 ppi. 
3. If the resolution is below the optimal ppi, then you need to increase the resolution of the graphic from its source file. 
4. Repeat this process for all pixelated graphics.

> **Note:** The process for optimizing the resolution of graphics differs from project-to-project. However, most graphics editing software will give you the option to change the resolution when exporting.

### Step 2: Relink to high-resolution graphic

1. In InDesign, click on a pixelated graphic. 
2. Choose **Window>Links** to open the Links panel. 
3. In the Links panel, click the Relink button ![Alt text](relink_button.png). 
4. In the dialogue box that appears, select the source file for the high-resolution version of the graphic. 
5. Click **Open**.
6. Repeat this process for all pixelated graphics.

### Step 3: Optimize Performance Display settings in InDesign

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

### Step 4: Export a new PDF

Export a PDF from InDesign again to confirm that graphis are not pixelated. If graphics are still pixelated, make sure that you completed **Steps 1–2** for all pixelated graphics. 

---
