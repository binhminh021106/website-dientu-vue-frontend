<template>
  <div class="faq-page roboto-font bg-white min-vh-100 pb-5">
    
    <!-- Banner & Breadcrumb -->
    <section class="page-banner position-relative d-flex align-items-center justify-content-center mb-5">
      <div class="position-absolute w-100 h-100 overlay"></div>
      <div class="container position-relative z-1 text-center text-white mt-4">
        <h2 class="fw-bold mb-3 fs-1 text-shadow">Câu hỏi thường gặp</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white text-decoration-none hover-text-brand">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">Câu hỏi thường gặp</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mb-5">
      <div class="row gx-lg-5 gy-5">
        
        <!-- Cột Trái: Hỏi đáp (Accordion) -->
        <div class="col-lg-7">
          <h5 class="fw-bold mb-4">Hỏi đáp về sản phẩm</h5>
          
          <div class="faq-accordion d-flex flex-column gap-3">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="faq-item rounded-1 overflow-hidden border"
            >
              <!-- Tiêu đề câu hỏi -->
              <button 
                class="w-100 text-start px-4 py-3 fw-bold border-0 d-flex justify-content-between align-items-center transition-colors"
                :class="activeIndex === index ? 'bg-brand text-white' : 'bg-light text-dark'"
                @click="toggleFaq(index)"
              >
                <span>{{ faq.question }}</span>
              </button>
              
              <!-- Nội dung câu trả lời (Có hiệu ứng trượt) -->
              <div class="accordion-body-wrapper" :class="{ 'open': activeIndex === index }">
                <!-- Đưa padding vào thẻ con bên trong để hiệu ứng đóng mượt và kín hoàn toàn -->
                <div class="accordion-inner bg-white">
                   <div class="px-4 py-3 text-dark border-top" style="line-height: 1.7; font-size: 0.95rem;" v-html="faq.answer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cột Phải: Form Liên hệ nhanh -->
        <div class="col-lg-5">
          <div class="contact-sidebar">
            <h5 class="fw-bold mb-3">Liên hệ với chúng tôi</h5>
            <p class="text-muted mb-4" style="font-size: 0.95rem; line-height: 1.6;">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
            </p>

            <form @submit.prevent="submitFaqContact">
              <div class="row g-3">
                <div class="col-12">
                  <input type="text" class="form-control rounded-1 py-2 px-3 border-light-subtle bg-white" placeholder="Họ và tên" required v-model="formData.name">
                </div>
                <div class="col-12">
                  <input type="email" class="form-control rounded-1 py-2 px-3 border-light-subtle bg-white" placeholder="Email" required v-model="formData.email">
                </div>
                <div class="col-12">
                  <input type="tel" class="form-control rounded-1 py-2 px-3 border-light-subtle bg-white" placeholder="Điện thoại*" required v-model="formData.phone">
                </div>
                <div class="col-12">
                  <textarea class="form-control rounded-1 py-2 px-3 border-light-subtle bg-white" placeholder="Nội dung" rows="5" required v-model="formData.message"></textarea>
                </div>
                <div class="col-12 mt-3">
                  <button type="submit" class="btn btn-brand px-4 py-2 fw-medium rounded-1 text-uppercase" style="font-size: 0.9rem;">
                    Gửi thông tin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Quản lý trạng thái mở/đóng của Accordion (Mở sẵn câu đầu tiên)
const activeIndex = ref(0)

const toggleFaq = (index) => {
  // Nếu bấm vào câu đang mở thì đóng lại, nếu bấm câu khác thì mở câu đó
  activeIndex.value = activeIndex.value === index ? null : index
}

// Dữ liệu giả lập câu hỏi
const faqs = ref([
  {
    question: 'Quy trình bảo hành sản phẩm tại TechZone như thế nào?',
    answer: `
      <p>Trong các trường hợp thiết bị gặp lỗi, bạn có thể yêu cầu bảo hành nhanh chóng theo các bước sau:</p>
      <ul class="mb-0 ps-3">
        <li><strong>Bước 1:</strong> Liên hệ tổng đài 1900 6750 hoặc nhắn tin qua Fanpage để báo lỗi sơ bộ.</li>
        <li><strong>Bước 2:</strong> Mang máy trực tiếp đến hệ thống cửa hàng TechZone gần nhất hoặc gửi qua đường bưu điện (TechZone hỗ trợ phí ship 1 chiều).</li>
        <li><strong>Bước 3:</strong> Kỹ thuật viên kiểm tra phần cứng/phần mềm và xác nhận lỗi từ nhà sản xuất.</li>
        <li><strong>Bước 4:</strong> Thông báo thời gian xử lý (Thường từ 3-5 ngày làm việc).</li>
        <li><strong>Bước 5:</strong> Hoàn trả thiết bị đã sửa chữa tận tay khách hàng.</li>
      </ul>
    `
  },
  {
    question: 'TechZone có hỗ trợ chương trình Thu cũ đổi mới không?',
    answer: 'Có. Chúng tôi hỗ trợ thu mua lại điện thoại, laptop, máy tính bảng cũ (ngay cả khi không mua tại TechZone) với mức giá cạnh tranh nhất thị trường để bạn dễ dàng lên đời sản phẩm mới. Vui lòng mang máy đến cửa hàng để được kỹ thuật viên định giá trực tiếp.'
  },
  {
    question: 'Tôi có thể mua hàng trả góp tại TechZone bằng cách nào?',
    answer: 'TechZone hiện đang hỗ trợ 2 hình thức trả góp chính:<br>- <strong>Trả góp qua thẻ tín dụng (0% lãi suất):</strong> Hỗ trợ hơn 25 ngân hàng, thủ tục duyệt trong 5 phút.<br>- <strong>Trả góp qua công ty tài chính (Home Credit, HD Saison):</strong> Chỉ cần CCCD/CMND, hỗ trợ duyệt hồ sơ online tại nhà.'
  },
  {
    question: 'Chính sách đổi trả trong 30 ngày áp dụng ra sao?',
    answer: 'Sản phẩm mua tại TechZone sẽ được áp dụng chính sách 1 đổi 1 trong vòng 30 ngày đầu tiên nếu phát sinh lỗi phần cứng từ nhà sản xuất. Máy đổi trả phải còn giữ nguyên hộp, phụ kiện đi kèm và không có dấu hiệu cấn móp, rơi vỡ hay vào nước.'
  },
  {
    question: 'Có nên mua kèm các gói Bảo hành mở rộng không?',
    answer: 'Rất khuyến khích. Đồ công nghệ luôn có rủi ro phát sinh lỗi ngoài ý muốn sau thời gian dài sử dụng. Gói bảo hành mở rộng (TechCare) sẽ giúp bạn gia tăng thời gian bảo hành thêm 1-2 năm, đồng thời hỗ trợ sửa chữa các lỗi người dùng (rơi vỡ, vào nước) với chi phí cực kỳ ưu đãi.'
  }
])

// Quản lý form liên hệ
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitFaqContact = () => {
  console.log('Đang gửi thông tin từ trang FAQ:', formData.value)
  alert('Cảm ơn bạn! Lời nhắn của bạn đã được gửi đi.')
  formData.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Biến màu thương hiệu */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.hover-brand:hover { color: #d84727 !important; transition: 0.2s ease; }

/* Banner Styling */
.page-banner {
  height: 250px;
  background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
}
.overlay {
  background-color: rgba(17, 24, 39, 0.7);
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}
.hover-text-brand:hover {
  color: #d84727 !important;
  transition: color 0.2s ease;
}

/* --- HIỆU ỨNG ACCORDION (CSS GRID) --- */
.transition-colors {
  transition: background-color 0.2s ease, color 0.2s ease;
}

.accordion-body-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-out; /* Mượt mà không cần Javascript */
}
.accordion-body-wrapper.open {
  grid-template-rows: 1fr;
}

.accordion-inner {
  overflow: hidden;
  min-height: 0; /* Quan trọng: Bắt buộc phải có để thẻ khép kín về 0px */
}
/* ------------------------------------ */

/* Form Inputs */
.form-control::placeholder {
  color: #9ca3af;
  font-size: 0.9rem;
}
.form-control:focus {
  box-shadow: none;
  border-color: #d84727 !important;
}
.border-light-subtle {
  border-color: #e5e7eb !important;
}

/* Button Submit */
.btn-brand {
  background-color: #d84727 !important;
  color: white !important;
  border: none;
  transition: all 0.2s ease;
}
.btn-brand:hover {
  background-color: #b8361b !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(216, 71, 39, 0.2);
}
</style>