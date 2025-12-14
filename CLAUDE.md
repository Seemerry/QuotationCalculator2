# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an LED display quotation calculator web application that helps users get price estimates for LED screens based on their requirements. The application is written in pure HTML, CSS, and JavaScript with no external dependencies or build system.

## File Structure

- `index.html` - Main HTML page containing the quotation calculator form and results display
- `script.js` - JavaScript application logic with LED product database and calculation functions
- `styles.css` - Complete styling for the responsive web interface
- `.claude/settings.local.json` - Claude Code configuration

## Running the Application

Since this is a static web application with no build process:

```bash
# Serve the files locally using any static web server
python -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000 in your browser.

## Architecture

### Data Structure
The application uses a comprehensive `ledDatabase` object that contains product information organized by:
- Environment (indoor-fixed, indoor-rental, outdoor-fixed, outdoor-rental)
- Product tier (TW11, TW21, TW31)
- Individual models with pixel pitch, pricing, and cabinet specifications

### Key Components

**Product Database** (`script.js:1-95`):
- Contains detailed specifications for LED displays across different environments and price tiers
- Includes pricing per square meter, cabinet sizes, and special pricing for specific configurations

**Form Handling**:
- Dynamic distance options based on indoor/outdoor selection
- Model selection with dropdown for alternatives
- Real-time calculation of cabinet requirements and pricing

**User Flow**:
1. User selects environment, preference, viewing distance, and screen dimensions
2. Application recommends optimal model based on distance and preference
3. Calculates cabinet requirements and price range
4. User can request detailed quotation by submitting contact information

### Price Calculation Logic
The application determines appropriate LED models based on:
- Viewing distance (closer distance = smaller pixel pitch required)
- User preference (TW11 = budget, TW21 = balanced, TW31 = premium)
- Screen dimensions and cabinet sizing
- Special pricing adjustments for rental cabinets

## Making Changes

**Adding New Products**: Update the `ledDatabase` object in `script.js` with new model specifications following the existing structure.

**Modifying Calculations**: Key functions are in `script.js` starting around line 140+ for form handling and calculation logic.

**Styling Changes**: All styles are in `styles.css` using a mobile-first responsive design with a purple gradient theme.

## No Build System

This project does not use any package manager, bundler, or build tools. All code runs directly in the browser with vanilla JavaScript.