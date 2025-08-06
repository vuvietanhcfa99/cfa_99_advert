const express = require('express');

// Tạo một ứng dụng Express
const app = express();
const port = 3000;

// Định nghĩa route để trả về thẻ Open Graph
app.get('/', (req, res) => {
    const ogTitle = 'Tin nóng hôm nay';
    const ogDes = req.query.title || "CFA99 - Nền tảng phân tích cổ phiếu #1 Việt Nam";
    const ogImage = req.query.image || "https://res.cloudinary.com/dysdlnnis/image/upload/v1754359649/4ffa7fc5de574a2e081b9990f2041c1921905f1d_nldnda.jpg"
    const ogUrl = "https://cfa99-landing-page.vercel.app";
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>${ogTitle}</title>
        <meta property="og:title" content="${ogTitle}" />
        <meta property="og:description" content="${ogDes}" />
        <meta property="og:image" content="${ogImage}" />
        <meta property="og:url" content="${ogUrl}" />
        <meta property="og:type" content="website" />
        <meta http-equiv="refresh" content="0; url=${ogUrl}">
        <script type="text/javascript">
            var webFallbackUrl = "https://cfa99-landing-page.vercel.app";

            window.location.replace(customSchemeAppUrl);

            setTimeout(function() {
                window.location.replace(webFallbackUrl);
            }, 1500);
        </script>
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
