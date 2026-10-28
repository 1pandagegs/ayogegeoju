import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        work: resolve(__dirname, 'work.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        coverageTrackr: resolve(__dirname, 'work-coverage-trackr.html'),
        homeAndAbroad: resolve(__dirname, 'work-home-and-abroad.html'),
        hemoTrackr: resolve(__dirname, 'work-hemo-trackr.html'),
        swiftEntry: resolve(__dirname, 'work-swiftentry.html'),
        sydaarLms: resolve(__dirname, 'work-sydaar-lms.html'),
        manorr: resolve(__dirname, 'work-manorr.html'),
        prmt: resolve(__dirname, 'work-prmt.html'),
        mundayne: resolve(__dirname, 'work-mundayne.html'),
        nuelliz: resolve(__dirname, 'work-nuelliz.html'),
        gojuDesign: resolve(__dirname, 'work-goju-design.html'),
        sabali: resolve(__dirname, 'work-sabali.html'),
        amfh: resolve(__dirname, 'work-amfh.html'),
        nepalDashboard: resolve(__dirname, 'work-nepal-dashboard.html'),
        paytrackSme: resolve(__dirname, 'work-paytrack-sme.html'),
        pathfinderAi: resolve(__dirname, 'work-pathfinder-ai.html'),
        babylonPurse: resolve(__dirname, 'work-babylon-purse.html'),
        gmpt: resolve(__dirname, 'work-gmpt.html'),
        as5Group: resolve(__dirname, 'work-as5-group.html'),
        claudeSkills: resolve(__dirname, 'work-claude-skills.html'),
        jonzeeWorld: resolve(__dirname, 'work-jonzee-world.html')
      }
    }
  }
})