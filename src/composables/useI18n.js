import { ref, computed } from 'vue'

// Lấy ngôn ngữ đã lưu trong trình duyệt, nếu chưa có thì mặc định là 'vi'
const currentLang = ref(localStorage.getItem('techzone_lang') || 'vi')

// Hàm đổi ngôn ngữ và lưu lại
const setLang = (lang) => {
  currentLang.value = lang
  localStorage.setItem('techzone_lang', lang)
}

// BỘ TỪ ĐIỂN CHUNG CHO TOÀN BỘ WEBSITE
const messages = {
  vi: {
    // --- Dùng cho Client Header ---
    promo_black_friday: 'BLACK FRIDAY',
    promo_enter_code: 'Nhập mã',
    promo_receive_gifts: 'NHẬN QUÀ HẤP DẪN',
    promo_buy_now: 'MUA NGAY',
    menu_home: 'Trang chủ',
    menu_about: 'Giới thiệu',
    menu_products: 'Sản phẩm',
    menu_news: 'Tin tức',
    menu_contact: 'Liên hệ',
    menu_faq: 'Câu hỏi thường gặp',
    menu_system: 'Hệ thống',
    search_placeholder: 'Tìm kiếm sản phẩm, thương hiệu...',
    account: 'Tài khoản',
    wishlist: 'Yêu thích',
    cart: 'Giỏ hàng',
    login_prompt: 'Đăng nhập để theo dõi đơn hàng và ưu đãi',
    login_btn: 'Đăng Nhập',
    no_account: 'Chưa có tài khoản?',
    register_btn: 'Đăng ký',
    
    // --- Dùng cho Client Footer ---
    footer_company_info: 'THÔNG TIN CÔNG TY',
    footer_company_name: 'Tên công ty',
    footer_company_value: 'Công ty CP một thành viên TechZone',
    footer_address: 'Địa chỉ',
    footer_address_value: '123 Đường Chính, TP. Buôn Ma Thuột, Đắk Lắk',
    footer_about_us: 'VỀ CHÚNG TÔI',
    footer_policies: 'CHÍNH SÁCH',
    footer_guide: 'Hướng dẫn mua hàng',
    footer_return: 'Chính sách đổi trả',
    footer_sales: 'Chính sách bán hàng',
    footer_shipping: 'Chính sách giao hàng',
    footer_privacy: 'Bảo mật thông tin cá nhân',
    footer_contact: 'THÔNG TIN LIÊN HỆ',
    footer_payment: 'PHƯƠNG THỨC THANH TOÁN',
    footer_copyright: 'Bản quyền thuộc về',
    footer_provided_by: 'Cung cấp bởi',
    
    // --- Dùng cho Admin Dashboard ---
    admin_title: 'Tổng quan hệ thống',
    admin_subtitle: 'Theo dõi hoạt động kinh doanh và trạng thái cửa hàng',
    download_report: 'Tải báo cáo',
    total_revenue: 'Tổng doanh thu',
    new_orders: 'Đơn hàng mới',
    customers: 'Khách hàng',
    products: 'Sản phẩm',
    recent_orders: 'Đơn hàng gần đây',
    view_all: 'Xem tất cả',
    order_id: 'Mã đơn',
    order_date: 'Ngày đặt',
    total_amount: 'Tổng tiền',
    status: 'Trạng thái',
    best_sellers: 'Sản phẩm bán chạy',
    sold: 'Đã bán',
    status_completed: 'Hoàn thành',
    status_processing: 'Đang xử lý',
    status_pending: 'Chờ thanh toán',
    status_cancelled: 'Đã hủy'
  },
  en: {
    // --- For Client Header ---
    promo_black_friday: 'BLACK FRIDAY',
    promo_enter_code: 'Enter code',
    promo_receive_gifts: 'GET AWESOME GIFTS',
    promo_buy_now: 'SHOP NOW',
    menu_home: 'Home',
    menu_about: 'About Us',
    menu_products: 'Products',
    menu_news: 'News',
    menu_contact: 'Contact',
    menu_faq: 'FAQ',
    menu_system: 'Stores',
    search_placeholder: 'Search products, brands...',
    account: 'Account',
    wishlist: 'Wishlist',
    cart: 'Cart',
    login_prompt: 'Login to track your orders and special offers',
    login_btn: 'Login',
    no_account: 'Don\'t have an account?',
    register_btn: 'Register',
    
    // --- For Client Footer ---
    footer_company_info: 'COMPANY INFO',
    footer_company_name: 'Company Name',
    footer_company_value: 'TechZone JSC',
    footer_address: 'Address',
    footer_address_value: '123 Main Street, Buon Ma Thuot City, Dak Lak',
    footer_about_us: 'ABOUT US',
    footer_policies: 'POLICIES',
    footer_guide: 'Shopping Guide',
    footer_return: 'Return Policy',
    footer_sales: 'Sales Policy',
    footer_shipping: 'Shipping Policy',
    footer_privacy: 'Privacy Policy',
    footer_contact: 'CONTACT INFO',
    footer_payment: 'PAYMENT METHODS',
    footer_copyright: 'Copyright by',
    footer_provided_by: 'Powered by',
    
    // --- For Admin Dashboard ---
    admin_title: 'System Overview',
    admin_subtitle: 'Monitor business activities and store status',
    download_report: 'Download Report',
    total_revenue: 'Total Revenue',
    new_orders: 'New Orders',
    customers: 'Customers',
    products: 'Products',
    recent_orders: 'Recent Orders',
    view_all: 'View All',
    order_id: 'Order ID',
    order_date: 'Order Date',
    total_amount: 'Total Amount',
    status: 'Status',
    best_sellers: 'Best Sellers',
    sold: 'Sold',
    status_completed: 'Completed',
    status_processing: 'Processing',
    status_pending: 'Pending',
    status_cancelled: 'Cancelled'
  }
}

// Xuất ra để các file .vue khác lấy dùng
export const useI18n = () => {
  const t = computed(() => messages[currentLang.value])
  return { currentLang, setLang, t }
}