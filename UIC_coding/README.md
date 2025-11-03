# Marko's Wonderland Ticket System

A web-based ticket booking system for a fictional movie theater called "Marko's Wonderland". This project demonstrates modern web development practices with accessibility features and responsive design.

## 📋 Project Overview

This application simulates a simplified ticket booking system where users can purchase movie tickets online. The system enforces a one-ticket-at-a-time policy and includes proper error handling and user feedback.

### 🎯 Key Features

- **Single Ticket Purchase**: Users can only buy one ticket at a time
- **Visual State Management**: Buttons change appearance based on current state
- **Comprehensive Error Handling**: Different error messages for various scenarios
- **Accessibility Features**: Screen reader support, keyboard navigation, ARIA attributes
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Modern UI**: Clean, professional design with smooth animations

## 🏗️ Technical Architecture

### File Structure
```
UIC_coding/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This documentation
```

### Technology Stack
- **HTML5**: Semantic markup with accessibility attributes
- **CSS3**: Modern styling with flexbox, animations, and media queries
- **Vanilla JavaScript**: Pure JS without external dependencies
- **ARIA**: Accessibility attributes for screen readers

## 🎮 User Interface

### Main Components

1. **Header Section**
   - Theater name: "Marko's Wonderland"
   - Subtitle: "Get your ticket here"
   - Info button (ℹ️) in top-right corner

2. **Interactive Buttons**
   - **Buy a ticket**: Purchases a new ticket
   - **Redeem your ticket**: Attempts to redeem current ticket

3. **Notification System**
   - Success messages (green)
   - Error messages (red)
   - Info messages (blue)

4. **Status Display**
   - Shows current ticket status
   - Visual feedback for button states

### Button States

#### Initial State
- **Buy button**: Bright/active (yellow glow)
- **Redeem button**: Dimmed/inactive

#### After Purchase
- **Buy button**: Dimmed/inactive
- **Redeem button**: Bright/active (green glow)

## 🔧 Functionality

### Core Functions

#### `buyTicket()`
- Handles ticket purchase logic
- Prevents multiple ticket purchases
- Updates UI state and provides feedback

#### `redeemTicket()`
- Simulates ticket redemption process
- Shows appropriate error messages
- Designed for demo purposes (doesn't actually redeem)

#### `updateTicketStatus()`
- Manages button visual states
- Updates status text and colors
- Handles UI state transitions

#### `showInfo()`
- Displays information about ticket limitations
- Temporarily disables other interactions

### Error Handling

The system handles multiple error scenarios:

1. **Error 01**: Trying to redeem when ticket must be validated by inspector
2. **Error 02**: Trying to redeem without having a ticket
3. **Error 03**: Trying to buy when already having a ticket

## ♿ Accessibility Features

### Screen Reader Support
- ARIA live regions for dynamic content announcements
- Semantic HTML elements
- Descriptive labels and titles

### Keyboard Navigation
- Full keyboard accessibility
- Focus indicators with visual feedback
- Enter/Space key support for all interactive elements

### Visual Accessibility
- High contrast colors meeting WCAG standards
- Clear focus indicators
- Readable font sizes and spacing

## 📱 Responsive Design

### Mobile Optimizations
- Nearly full-width container on mobile
- Reduced padding and font sizes
- Horizontal button layout on very small screens
- Touch-friendly button sizes

### Breakpoints
- **Desktop**: Default styling (600px+)
- **Mobile**: Optimized layout (<600px)
- **Small Mobile**: Horizontal button layout (limited height)

## 🎨 Design System

### Color Palette
- **Primary Background**: `#191a1d` (Dark)
- **Container**: `rgba(30, 30, 36, 0.97)` (Semi-transparent dark)
- **Success**: `#47d16a` (Green)
- **Error**: `#e84444` (Red)
- **Info**: `#4a6ee0` (Blue)
- **Accent**: `#ffe066` (Yellow)

### Typography
- **Headers**: Georgia, serif
- **Body**: Inter, Segoe UI, Arial, sans-serif
- **Button Text**: Inter with letter-spacing

### Interactive States
- **Active buttons**: Bright colors with subtle glow effects
- **Inactive buttons**: Muted colors, still clickable
- **Hover effects**: Smooth color transitions
- **Focus indicators**: Yellow outline with shadow

## 🚀 Setup and Usage

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process or server required

### Usage
1. Click "Buy a ticket" to purchase a ticket
2. After purchase, the "Redeem your ticket" button becomes active
3. Click the info button (ℹ️) for help information
4. Try different interactions to see error handling

## 🧪 Testing Scenarios

### Normal Flow
1. Start → Click "Buy a ticket" → Success message
2. After purchase → Click "Redeem your ticket" → Error message (demo)

### Error Cases
1. Try buying when already have ticket → Error 03
2. Try redeeming without ticket → Error 02
3. Try redeeming with ticket → Error 01 (inspector required)

### Accessibility Testing
1. Navigate using only keyboard (Tab, Enter, Space)
2. Test with screen reader
3. Check focus indicators
4. Verify color contrast

## 🔄 Development History

This project was developed through an iterative process with AI assistance. Key milestones:

1. **Initial Implementation**: Basic buy/redeem functionality
2. **UI Improvements**: Button states and visual feedback
3. **Mobile Optimization**: Responsive design implementation
4. **Accessibility Enhancement**: ARIA attributes and keyboard support
5. **Error Handling**: Comprehensive error scenarios
6. **Code Quality**: Documentation and best practices

## 🎯 Future Enhancements

### Potential Improvements
- **Real Backend Integration**: Connect to actual ticketing API
- **Multiple Ticket Types**: Different categories and prices
- **Payment Processing**: Integration with payment gateways
- **User Authentication**: Login and user management
- **Seat Selection**: Interactive theater seating chart
- **Booking History**: Track previous purchases

### Technical Improvements
- **State Management**: Consider using a framework for complex state
- **Testing**: Add unit and integration tests
- **Performance**: Optimize for larger scale usage
- **Security**: Implement proper validation and sanitization

## 📄 License

This project is created for educational purposes as part of UI Construction course work.

## 👥 Credits

- Developed with GitHub Copilot and Perplexity assistance
- UI/UX design inspired by modern ticket booking systems
- Accessibility guidelines based on WCAG 2.1 standards

---

*This documentation reflects the current state of the project as of November 2025.*
