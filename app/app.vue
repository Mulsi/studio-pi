<template>
  <header class="sticky top-0 z-50 bg-white transition-all duration-300 ease-out"
    :class="{ 'py-4 md:py-8': !isScrolledDown, 'py-2 md:py-4': isScrolledDown }">
    <div class="w-full flex items-center px-4 md:px-8" :class="{ 'h-8': isScrolledDown, 'h-16': !isScrolledDown }">
    <a href="/">
      <img src="/logo.svg" alt="Studio PI" class="transition-all duration-300 ease-out"
        :class="{ 'w-58 md:w-96': !isScrolledDown, 'w-36 md:w-50': isScrolledDown }" />
    </a>
    </div>
  </header>
  <main>
    <div class="flex w-full h-full items-center justify-center px-4 md:px-8 pb-8">
      <img src="/img/hero.png" alt="Studio PI" class="w-full h-full" />
    </div>
    <div class="w-full px-4 md:px-8 space-y-6">
      <p class="text-l leading-relaxed">
        STUDIO PI, founded by Iva Pauzar, is a multidisciplinary practice based
        in Zagreb, working across architecture, design, and spatial
        interventions. Our approach is rooted in the study of nature, its impact
        on people, their behaviours and needs within spaces, and the role of
        context in shaping meaningful places.
      </p>
      <p class="text-l leading-relaxed">
        We believe architecture has the power to influence wellbeing. By
        combining contemporary design with insights into how environments affect
        emotions, together with contextual awareness, we create projects that
        support wellbeing and provide the needed atmosphere Each space is
        developed with careful attention to how it will be experienced, lived
        in, and used so that function and atmosphere work naturally together,
        potentially creating spaces or objects that enhance quality of life.
      </p>
      <p class="text-l leading-relaxed">
        Operating across all scales, our projects reveal an interplay where
        product design and architecture form a mutual dependency. This
        relationship gives rise to human-centric spaces tailored to the needs
        and rhythms of their users where form and function exist in
        synchronicity.
      </p>
      <p class="text-l leading-relaxed">
        Design should serve people, enrich their surroundings, and connect to
        its context and meaning.
      </p>
    </div>
  </main>
  <footer>
    <div class="pt-16 pb-2 flex flex-col md:flex-row gap-4 md:gap-0 justify-between px-4 md:px-8">
      <div class="flex gap-4 justify-center text-gray-500">
        <a href="mailto:studio@studiopi.eu" class="text-sm leading-relaxed">Email</a>
        <a href="https://www.linkedin.com/company/studiopieu/" target="_blank"
          class="text-sm leading-relaxed">Linkedin</a>
        <a href="https://www.instagram.com/studiopi.eu/" target="_blank" class="text-sm leading-relaxed">Instagram</a>
        <a href="https://substack.com/@ivapauzar" target="_blank" class="text-sm leading-relaxed">Substack</a>
      </div>
      <div class="pb-8">
        <p class="text-sm text-center text-gray-500 leading-relaxed">
          <a href="/">
            &copy; 2025 Studio PI. All rights reserved.
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolledDown = ref(false)

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Trigger shrink when user scrolls down more than 30px
  isScrolledDown.value = scrollTop > 16
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>