# 🌟 Kindora Learning

**Kindora Learning** is an accessible K–6 educational platform designed to make learning more approachable, encouraging, and adaptable for children with different learning needs.

The goal is to create a calm, supportive learning environment where children can practice important academic and life skills without unnecessary distractions or pressure.

## 📚 Subjects

Kindora currently includes activities for:

* 📖 Reading
* 🔢 Mathematics
* 🔬 Science
* ✏️ Writing
* 🌎 Life Skills

Activities are organized by grades:

* Kindergarten
* Grade 1
* Grade 2
* Grade 3
* Grade 4
* Grade 5
* Grade 6

## ♿ Accessibility

The website includes several accessibility-focused features:

* Large text mode
* High contrast mode
* Reduced motion mode
* Calm mode
* Keyboard-friendly navigation
* Visible keyboard focus indicators
* Skip-to-content navigation
* Simple visual layouts
* Large buttons
* Encouraging feedback
* One activity at a time

Accessibility is intended to be a core part of the product rather than an optional add-on.

## 🎯 Current Features

* K–6 grade selection
* Subject filtering
* Interactive learning activities
* Immediate feedback
* Progress tracking
* Activity completion
* Parent/Teacher dashboard
* Basic progress reporting
* Downloadable progress report
* Responsive mobile, tablet, and desktop interface

## 🏗️ Project Structure

```text
Kindora-learning/
│
├── index.html
├── styles.css
├── app.js
├── README.md
└── LICENSE.txt
```

## 🚀 Running Locally

The current version is a static website and does not require a build system.

Open:

```text
index.html
```

in a modern web browser.

Alternatively, run a local web server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## ☁️ Hosting

The current frontend can be hosted using:

* GitHub Pages
* Vercel
* Netlify

For the future full application, Kindora should use a cloud-hosted backend and database rather than relying on a computer running at home.

Recommended architecture:

```text
GitHub
   │
   ├── Source code
   │
   ↓
Vercel
   │
   └── Kindora website
          │
          ↓
       Backend API
          │
          ↓
       Database
```

## 🔐 Future Backend

The production version is expected to include:

* Secure user authentication
* Parent accounts
* Teacher accounts
* Student profiles
* Secure progress storage
* Assignments
* Learning goals
* Teacher dashboards
* Parent dashboards
* Curriculum management
* Activity management
* Personalized learning
* Progress reports
* Secure APIs

The backend must be hosted in the cloud and must not require a personal computer to remain online.

## ⚠️ Child Privacy and Security

The current prototype is **not intended for storing sensitive information about real children**.

The prototype stores progress locally in the user's browser.

Before real children use the platform, the production version should implement appropriate:

* Authentication
* Authorization
* Encryption
* Data minimization
* Secure database storage
* Parental consent processes
* Account controls
* Data deletion procedures
* Privacy policies
* Security monitoring
* Accessibility testing
* Child-data/privacy compliance review

Do not enter real student identifying information into the prototype.

## 🛠️ Development Roadmap

### Phase 1 — Website

* [x] K–6 interface
* [x] Subjects
* [x] Interactive activities
* [x] Accessibility controls
* [x] Progress prototype

### Phase 2 — Cloud Application

* [ ] Cloud backend
* [ ] Database
* [ ] Authentication
* [ ] Parent accounts
* [ ] Teacher accounts
* [ ] Student profiles
* [ ] Secure progress storage

### Phase 3 — Learning Platform

* [ ] Hundreds of activities
* [ ] Curriculum mapping
* [ ] Teacher assignments
* [ ] Personalized learning
* [ ] Audio instructions
* [ ] Text-to-speech
* [ ] More accessibility tools
* [ ] Advanced progress analytics

### Phase 4 — Production

* [ ] Security audit
* [ ] Accessibility audit
* [ ] Privacy/compliance review
* [ ] Automated testing
* [ ] Production monitoring
* [ ] Custom domain
* [ ] Backup and disaster recovery

## 📄 License

See `LICENSE.txt` for the project license.

## 🌱 Vision

Kindora aims to make learning more accessible, supportive, and enjoyable for children while giving parents and teachers useful tools to understand and support learning progress.
