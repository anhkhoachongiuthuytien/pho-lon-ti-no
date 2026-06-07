# Hướng dẫn Triển khai & Nhúng Link Bài tập của bạn

Chào bạn! Để giúp bạn dễ dàng đưa link bài tập đã làm vào website mà không cần phải biết viết code hay chỉnh sửa cấu trúc HTML phức tạp, tôi đã thiết kế một **Bộ cấu hình tập trung** trong tệp `script.js`.

---

## 1. Cách Nhúng Link bài tập của bạn (Google Drive, Youtube, Canva...)

Bạn chỉ cần mở tệp **[script.js](file:///d:/ti%20lo/script.js)** bằng bất kỳ trình soạn thảo văn bản nào (Notepad, VS Code, v.v.).

Ngay ở **dòng đầu tiên** của tệp, bạn sẽ thấy phần cấu hình `PROJECT_LINKS` trông như thế này:

```javascript
const PROJECT_LINKS = {
  // BÀI TẬP 1
  project1: {
    pdf: "assets/pdf/bai-tap-1.pdf",       // <--- DÁN LINK FILE BÁO CÁO BÀI 1 VÀO ĐÂY
    video: "assets/video/project-demo.mp4" // <--- DÁN LINK SẢN PHẨM / VIDEO BÀI 1 VÀO ĐÂY
  },
  // BÀI TẬP 2
  project2: {
    pdf: "assets/pdf/bai-tap-2.pdf",       // <--- DÁN LINK FILE BÁO CÁO BÀI 2 VÀO ĐÂY
    video: "assets/video/project-demo.mp4" // <--- DÁN LINK SẢN PHẨM / VIDEO BÀI 2 VÀO ĐÂY
  },
  // ... (Tương tự cho các bài từ 1 đến 6)
};
```

### Các bước thực hiện:
1. **Lấy link bài tập của bạn:** Lên Google Drive, OneDrive, Youtube hoặc Canva của bạn, sao chép liên kết chia sẻ (đảm bảo đã bật chế độ *"Bất kỳ ai có liên kết đều có thể xem"*).
2. **Dán vào cấu hình:** Dán liên kết đó đè vào giữa hai dấu nháy kép `"..."` tương ứng với mỗi bài tập trong `script.js`.
   * *Ví dụ cho bài 1:*
     ```javascript
     project1: {
       pdf: "https://drive.google.com/file/d/1abcxyz.../view?usp=sharing",
       video: "https://www.youtube.com/watch?v=1abcxyz"
     }
     ```
3. **Lưu file lại:** Ấn `Ctrl + S` để lưu file `script.js` lại. Website sẽ tự động cập nhật liên kết. Khi người dùng bấm nút:
   * Nếu là link ngoài (bắt đầu bằng `http` hoặc `https` như Google Drive, Youtube, Canva...): Website sẽ tự động mở trang web đó ở tab mới.
   - Nếu giữ nguyên link mặc định hoặc đường dẫn file cục bộ: Website sẽ tự động mở file mẫu PDF học kỳ hoặc video player có sẵn trên giao diện.

---

## 2. Cách triển khai lên GitHub Pages (Khuyên dùng)

Giúp bạn có link truy cập dạng: `https://<ten-tai-khoan>.github.io/<ten-kho-chua>/`

1. Đăng nhập [github.com](https://github.com/) và tạo một repository mới chế độ **Public** (ví dụ tên: `digital-portfolio`).
2. Tải toàn bộ mã nguồn của thư mục này lên repository đó.
3. Vào **Settings** (Cài đặt) -> chọn **Pages** ở menu bên trái.
4. Tại phần **Branch**: chọn `main` (hoặc `master`) và thư mục `/ (root)` -> Bấm **Save**.
5. Đợi khoảng 1 phút và tải lại trang, bạn sẽ thấy đường link trang web hoạt động công khai hiển thị ở phía trên.

---

## 3. Cách triển khai lên Netlify (Kéo-Thả trong 15 giây)

Giúp bạn có link dạng: `https://<ten-tuy-chinh>.netlify.app/`

1. Truy cập [netlify.com](https://www.netlify.com/) và đăng nhập tài khoản miễn phí.
2. Truy cập vào mục **Sites** -> Cuộn xuống và **kéo thả cả thư mục này** (chứa tệp `index.html`, `style.css`, `script.js` và thư mục `assets`) vào vùng tải lên.
3. Netlify sẽ cấp cho bạn một link ngẫu nhiên. Để đổi tên theo ý muốn: vào **Site configuration** -> **Change site name** -> Đặt tên dễ nhớ (ví dụ: `digital-portfolio-cua-nam`) -> Nhấp **Save**.
