const express = require('express');

// Tạo một ứng dụng Express
const app = express();
const port = 3000;

// Định nghĩa route để trả về thẻ Open Graph
app.get('/', (req, res) => {
    // Lấy tiêu đề từ query parameter, mặc định là "CFA99 - Landing Page" nếu không có
    const ogTitle = req.query.title || "CFA99";
    const ogDescription = "Đây là website CFA99, trang landing page cho sản phẩm của chúng tôi.";
    const ogUrl = "https://cfa99-landing-page.vercel.app/";
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>${ogTitle}</title>
        <meta property="og:title" content="${ogTitle}" />
        <meta property="og:description" content="${ogDescription}" />
        <meta property="og:image" content="https://res.cloudinary.com/dysdlnnis/image/upload/v1754359649/4ffa7fc5de574a2e081b9990f2041c1921905f1d_nldnda.jpg" />
        <meta property="og:url" content="${ogUrl}" />
        <meta property="og:type" content="website" />
        <meta http-equiv="refresh" content="0; url=${ogUrl}">
    </head>
    <body>
        <h1>Đang chuyển hướng...</h1>
        <p>Nếu trang không tự động chuyển hướng, vui lòng bấm vào liên kết sau: <a href="${ogUrl}">${ogUrl}</a></p>
    </body>
    </html>
    `;

    // Thiết lập Content-Type để trình duyệt hiểu là HTML
    res.setHeader('Content-Type', 'text/html');
    // Gửi phản hồi về client
    res.send(htmlResponse);
});

// Khởi động server và lắng nghe trên một cổng nhất định
app.listen(port, () => {
    console.log(`API đang chạy tại http://localhost:${port}`);
    console.log(`Để kiểm tra, truy cập: http://localhost:${port}/og-card?title=Tiêu%20đề%20website%20tuyệt%20vời`);
});
