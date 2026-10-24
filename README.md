# Portfolio — Nguyễn Phú Trọng

Website tĩnh bằng HTML, CSS và JavaScript, không cần framework, cài thư viện hoặc build.

## Xem trên máy

Mở `index.html` bằng trình duyệt. Các phần chính và nút tải CV hoạt động trực tiếp.
Nút sao chép email chỉ hiển thị khi trình duyệt cho phép Clipboard API; gửi email bằng liên kết vẫn hoạt động.

Nếu có Python, có thể chạy trong thư mục này:

```sh
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Đưa lên GitHub Pages

1. Tạo một repository public trên tài khoản GitHub, ví dụ `portfolio`.
2. Upload **nội dung bên trong thư mục này** vào gốc repository: `index.html`, `styles.css`, `script.js`, thư mục `assets`, `.nojekyll` và README này. Không upload file ZIP nguyên khối.
3. Commit các file lên nhánh `main`.
4. Vào **Settings → Pages** của repository.
5. Trong **Build and deployment → Source**, chọn **Deploy from a branch**.
6. Chọn nhánh **main**, thư mục **/ (root)**, rồi **Save**.
7. Khi GitHub hoàn tất triển khai, mở địa chỉ được hiển thị trong phần Pages.

Nếu dùng repository tên `portfolio`, địa chỉ dự kiến là:
`https://TrongNP-31630.github.io/portfolio/`

Nếu muốn địa chỉ dạng `https://TrongNP-31630.github.io/`, dùng repository tên `TrongNP-31630.github.io`.

Tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Chỉnh sửa nội dung

- `index.html`: giới thiệu, dự án, kỹ năng, thành tích và liên hệ.
- `styles.css`: màu sắc, chữ, bố cục và giao diện điện thoại. Các màu chính nằm ở `:root`.
- `script.js`: menu điện thoại, năm hiện tại, sao chép email.
- `assets/portrait.png`: ảnh chân dung.
- `assets/NguyenPhuTrong-CV.pdf`: CV song ngữ để tải xuống. Thay file cùng tên khi cập nhật CV.
- `assets/favicon.svg`: biểu tượng trên tab trình duyệt.

Toàn bộ đường dẫn tài nguyên là tương đối để hoạt động cả ở domain gốc lẫn thư mục repository của GitHub Pages.
Website không có form gửi tin nhắn hoặc máy chủ; liên hệ sử dụng email và GitHub.

## Nội dung dự án

Mô tả dự án được lấy từ CV; phần AureliaBook được cập nhật theo bản phân công sprint đã cung cấp. Phạm vi phân công được trình bày riêng với phần phối hợp và review, không dùng các tiêu chí nghiệm thu trong kế hoạch để khẳng định kết quả đã đạt. Chưa có video demo hoặc ảnh giao diện dự án; có thể bổ sung sau khi có tài nguyên thực tế. Website không ghi nhận các chỉ số hiệu năng hoặc kết quả kỹ thuật chưa được kiểm chứng.

## Bản cập nhật bố cục

Ảnh đầu trang có khung cao tối đa 350px trên máy tính và 270px trên điện thoại; ảnh hiển thị trọn khung bằng `object-fit: contain`. Nếu đang mở bản cũ, nhấn Ctrl + F5 để tải lại HTML và CSS.

## Phần thuật toán Pikachu

Phần đóng góp cá nhân được cập nhật theo mã GameLogic do tác giả cung cấp: BFS với trạng thái hướng và số góc rẽ; dựng lại đường đi qua nút cha; xáo trộn ô còn lại bằng Collections.shuffle và kiểm tra nước đi bằng checkValidMatrix/findPath. Nội dung mô tả ưu tiên số góc rẽ, không khẳng định tối ưu số bước đi. Không quy phần gravity/Flows cho tác giả khi chưa có xác nhận.

## Timeline

Các mốc do tác giả cung cấp: đội tuyển học sinh giỏi Tin học 2022–2024; thi học bổng FPT đạt 30% tháng 04/2024; Khuyến khích FAlgo tháng 09/2025; đội The Boys thi ICPC miền Nam và toàn quốc trong 10–11/2025; đội Za Lizardo tiếp tục thi ICPC miền Nam và toàn quốc trong 10–11/2026. Các khoảng tháng được cập nhật theo xác nhận của tác giả.


## Ngôn ngữ

- `index.html`: bản tiếng Việt.
- `index.en.html`: bản tiếng Anh đầy đủ.
- Nút EN/VI trên navbar chuyển ngôn ngữ và giữ mục đang xem. Hai bản dùng chung CSS, JavaScript và tài nguyên.
- Khi chỉnh nội dung, cập nhật cả hai file HTML. Khi triển khai, nhớ đưa `index.en.html` lên cùng các file còn lại.
