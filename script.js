/**
 * DIGITAL PORTFOLIO INTERACTION LOGIC
 * =========================================================================
 * CẤU HÌNH ĐƯỜNG DẪN BÀI TẬP (NHÚNG LINK CỦA BẠN TẠI ĐÂY)
 * Bạn có thể dán link Google Drive, OneDrive, Youtube, Canva, Google Sites
 * hoặc đường dẫn file cục bộ (assets/pdf/...) vào đây.
 * =========================================================================
 */
const PROJECT_LINKS = {
  // BÀI TẬP 1
  project1: {
    pdf: "assets/pdf/bai-tap-1.pdf",       // Nhúng link PDF bài 1 tại đây
    video: "https://docs.google.com/document/d/14vJzLTlygNZ79_Kg0dy1WWaAUaV7YsQe/edit?usp=sharing&ouid=116835654666839805381&rtpof=true&sd=true" // Nhúng link video / slide / sản phẩm bài 1 tại đây
  },
  // BÀI TẬP 2
  project2: {
    pdf: "assets/pdf/bai-tap-2.pdf",       // Nhúng link PDF bài 2 tại đây
    video: "https://docs.google.com/document/d/1fBe6cjVOSP6OOv8PT95ONH7boHf6niwO/edit?usp=sharing&ouid=116835654666839805381&rtpof=true&sd=tru" // Nhúng link video / slide / sản phẩm bài 2 tại đây
  },
  // BÀI TẬP 3
  project3: {
    pdf: "assets/pdf/bai-tap-3.pdf",       // Nhúng link PDF bài 3 tại đây
    video: "https://docs.google.com/document/d/1W9UDTQpPSEGcTywg70yqvz8i2U11PMHT/edit?usp=sharing&ouid=116835654666839805381&rtpof=true&sd=true" // Nhúng link video / slide / sản phẩm bài 3 tại đây
  },
  // BÀI TẬP 4
  project4: {
    pdf: "assets/pdf/bai-tap-4.pdf",       // Nhúng link PDF bài 4 tại đây
    video: "https://docs.google.com/document/d/1KGM-FNOOPYN4CgzXNPpciTfXGU4nxB2O/edit?usp=sharing&ouid=116835654666839805381&rtpof=true&sd=true" // Nhúng link video / slide / sản phẩm bài 4 tại đây
  },
  // BÀI TẬP 5
  project5: {
    pdf: "assets/pdf/bai-tap-5.pdf",       // Nhúng link PDF bài 5 tại đây
    video: "https://docs.google.com/document/d/1T0G7XsqZ7yVlyUHkXQoECdyfdcpgBN2O/edit?usp=sharing&ouid=116835654666839805381&rtpof=true&sd=true" // Nhúng link video / slide / sản phẩm bài 5 tại đây
  },
  // BÀI TẬP 6
  project6: {
    pdf: "assets/pdf/bai-tap-6.pdf",       // Nhúng link PDF bài 6 tại đây
    video: "https://docs.google.com/document/d/1WVTJnWkur8Vuxo_sxjryKJ3FbD5KLd45/edit?usp=sharing&ouid=116835654666839805381&rtpof=true&sd=true" // Nhúng link video / slide / sản phẩm bài 6 tại đây
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. TỰ ĐỘNG KHỞI TẠO LIÊN KẾT TỪ CẤU HÌNH
  // ==========================================
  const pdfButtons = document.querySelectorAll('.project-link-pdf');
  const videoButtons = document.querySelectorAll('.project-link-video');

  // Khởi tạo các nút xem PDF
  pdfButtons.forEach(btn => {
    const projectId = btn.getAttribute('data-project');
    if (PROJECT_LINKS[projectId] && PROJECT_LINKS[projectId].pdf) {
      const link = PROJECT_LINKS[projectId].pdf;
      btn.setAttribute('href', link);
      
      // Nếu là link ngoài (http/https), mở trong tab mới
      if (link.startsWith('http') || link.startsWith('https') || link.startsWith('//')) {
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
      }
    }
  });

  // Khởi tạo các liên kết cho nút xem video/sản phẩm
  videoButtons.forEach(btn => {
    const projectId = btn.getAttribute('data-project');
    const htmlHref = btn.getAttribute('href');
    
    // Kiểm tra xem HTML gốc có liên kết ngoài hay không
    const isHtmlExternal = htmlHref && (htmlHref.startsWith('http') || htmlHref.startsWith('https') || htmlHref.startsWith('//'));
    
    if (PROJECT_LINKS[projectId] && PROJECT_LINKS[projectId].video) {
      const link = PROJECT_LINKS[projectId].video;
      const isConfigExternal = link.startsWith('http') || link.startsWith('https') || link.startsWith('//');
      
      if (isConfigExternal) {
        // Ưu tiên liên kết ngoài từ cấu hình PROJECT_LINKS
        btn.setAttribute('href', link);
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
      } else if (isHtmlExternal) {
        // Nếu cấu hình là cục bộ nhưng HTML có sẵn link ngoài, giữ nguyên HTML
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
      } else {
        // Cả hai đều là file cục bộ, gán '#' để kích hoạt modal
        btn.setAttribute('href', '#');
      }
    } else if (isHtmlExternal) {
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    } else {
      btn.setAttribute('href', '#');
    }
  });


  // ==========================================
  // 2. SPA NAVIGATION SYSTEM (Chuyển trang mượt)
  // ==========================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('navigation-menu');
  const logoLink = document.getElementById('logo-link');

  function switchTab(targetId) {
    sections.forEach(section => {
      section.classList.remove('active');
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      mobileMenuBtn.querySelector('i').className = 'ph ph-list';
    }

    history.pushState(null, null, `#${targetId}`);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      switchTab(targetId);
    });
  });

  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab('gioi-thieu');
  });

  const triggerBtns = document.querySelectorAll('.scroll-trigger-btn');
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
    });
  });

  const currentHash = window.location.hash.replace('#', '');
  if (currentHash && ['gioi-thieu', 'du-an', 'tong-ket'].includes(currentHash)) {
    switchTab(currentHash);
  }


  // ==========================================
  // 3. MOBILE MENU NAVIGATION
  // ==========================================
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      navMenu.classList.remove('open');
      mobileMenuBtn.querySelector('i').className = 'ph ph-list';
    } else {
      navMenu.classList.add('open');
      mobileMenuBtn.querySelector('i').className = 'ph ph-x';
    }
  });


  // ==========================================
  // 4. STICKY HEADER & BACK TO TOP SCROLL EVENTS
  // ==========================================
  const header = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const footerTopBtn = document.getElementById('footer-top-btn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollPos > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (footerTopBtn) {
    footerTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ==========================================
  // 5. PROJECTS FILTER SYSTEM (Bộ lọc dự án)
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(',');
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });


  // ==========================================
  // 6. MODAL SYSTEM (Trình chiếu Video / Nhận diện link ngoài)
  // ==========================================
  const modal = document.getElementById('video-modal');
  const modalTitle = document.getElementById('modal-title-text');
  const modalVideo = document.getElementById('modal-video-player');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Lắng nghe sự kiện click trên tất cả nút xem sản phẩm/video
  videoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      
      // CHỈ kích hoạt modal nếu href là '#' (tức là file video cục bộ)
      if (href === '#' || href === '' || !href) {
        e.preventDefault(); // Ngăn chặn nhảy trang
        
        const projectTitle = btn.getAttribute('data-title');
        const projectId = btn.getAttribute('data-project');
        
        // Cập nhật nguồn video cục bộ nếu có cấu hình
        if (PROJECT_LINKS[projectId] && PROJECT_LINKS[projectId].video) {
          modalVideo.querySelector('source').setAttribute('src', PROJECT_LINKS[projectId].video);
          modalVideo.load();
        }
        
        modalTitle.textContent = projectTitle;
        modal.classList.add('open');
        
        if (modalVideo) {
          modalVideo.currentTime = 0;
          modalVideo.play().catch(err => {
            console.log("Auto play blocked: ", err);
          });
        }
      }
      // NẾU href là link ngoài (http/https), trình duyệt sẽ tự động mở tab mới theo target="_blank"
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    if (modalVideo) {
      modalVideo.pause();
    }
  }

  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

});
