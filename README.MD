tạo dự án bằng Express, tạo cấu trúc thư mục và cấu hình ban đầu.
--------------------------------------------------------------------------

1. Express là gì?

Express là một framework nhỏ và tiện ích để xây dựng các ứng dụng web, cung cấp một lượng lớn của tính năng mạnh mẽ để phát triển các ứng dụng web và mobile. Nó rất dễ dàng để phát triển các ứng dụng nhanh dựa trên Node.js cho các ứng dụng Web. Dưới đây là các tính năng cơ bản của Express framework.

2. CÀI ĐẶT EXPRESS GENERATOR (đây là một CLI của Express Framwork)
- Lệnh cài đặt:

$ npm install express-generator -g

ok install thành công, bây giờ các bạn có thể sử dụng cli này để tạo
các dự án nhé.

3. Tạo Project bằng Express
- Lệnh cài đặt:

$ express --view=your_template_engine name_app

- your_template_engine: là template các bạn muốn sử dụng, mặc định
express dùng ejs (hbs)
- Name_app: tên dự án cũng là tên thư mục chứa dự án.

Đã tạo thành công dự án sử dụng express, bây giờ chúng ta cài đặt các
node_modules và chạy thử.

=> npm thực thi file /bin/www để tạo server. với port mặc định là 3000.

truy cập trên trình duyệt http://localhost:3000

Thử thành công.

4. Tạo cấu trúc thư mục của dự án theo MVC

- Controllers
- Models
- Config
- Templates
- server.js (không sử dụng /bin/www nữa)

5. Cấu hình template và cơ bản

Bây giờ chúng ta cần cài đặt một số các modules:

- nodemon: dùng để dev và tự động khởi động lại server mỗi lần lưu thay đổi
- handlebars: dùng template engine này cho phần giao diện nhé.
- mongoose: dùng thao tác với cơ sở dữ liệu.

tạm thời 3 modules quan trọng.

Trong khi cài đặt bằng lệnh: npm install options tên_module chú ý 2 tùy chọn đó là --save và -g:

+ --save: là các modules được cài đặt và lưu vào dự án đồng thời lưu vào file 
package.json
+ -g: lưu module vào môi trường của máy để dùng chung cho các dự án khác.

Nếu không sử dụng các options này thì dự án cũng có thể chạy được nhưng khi
dev lên các node server như openshift, heroku và các node server khác chắc chắn 
sẽ không chạy được.

Không thấy nodemon được liệt kê trong package.json bởi vì nó được 
cài theo tùy chọn global toàn cục dùng chung cho các dự án nodejs khác nhau.

- Config template:
B1. thiết lập phần template custom.

B2. gắn router và controller.

B3. kết nối models và controllers.

B4. kết nối đến cơ sở dữ liệu.

thiết lập đa ngôn ngữ cho dự án sử dụng module i18n
--------------------------------------------------------------------------
1. CÀI ĐẶT
$ npm install i18n --save

2. CẤU HÌNH I18N MIDDLEWARE TRONG EXPRESS

- lưu ý khi require module này thì cần phải theo thứ tự trước sau
đối với module cookie-parser trong file app.js nhé. Bởi vì nó sử dụng cookie
nên cần phải require sau thằng cookie-parser.

- Có nhiều tham số truyền vào nhưng chỉ cần một số là đủ dùng.
- lưu ý cần phải khai báo đúng mã code ngôn ngữ.
ngôn ngữ vietnamese là vi chứ không phải là vn.

-cấu hình xong. Tiếp theo cần khai báo một số 
var để truyền qua template nhé.

khai báo phải đặt trước khi use router.

Ok bây giờ có được 2 biến truyền qua template clanguage và languages

Tạo 2 hàm __ và __n

- __ : dịch chuỗi text cơ bản __ "Text ở đây" và sẽ tự động thêm vào file ngon-ngu-mac-dinh.json
- __n : dịch chuỗi có kèm theo var {{ __n "%d member" countMember}} chuỗi sẽ thành như này:

vi.json
"%d member": {
    "one": "%d thành viên",
    "other": "%d thành viên"
}

en.json
"%d member": {
    "one": "%d member", // một thành viên
    "other": "%d members" // số nhiều trong tiếng anh
}

khai báo hàm trong helpers để sử dụng.

Như vậy có 2 hàm để dùng trong template rồi.

3. SỬ DỤNG TRONG TEMPLATES VÀ METHOD

- Tiếp tục làm cái chuyển ngôn ngữ trong template:

Có một số lỗi

để sử dụng snippet của bootstrap cần cài extendtion này.

như vậy phần template coi như ổn

- Khai báo router để chuyển đổi ngông ngư qua lại.

Hoạt động trơn chu rồi 

- Tiếp theo thư dịch xem thế nào nhé.

chúng ta phải để i18n tự động add text vào json và dịch qua tiếng việt. Lấy english làm gốc nhé.


4. TESTING

