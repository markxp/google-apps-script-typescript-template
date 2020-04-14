# google apps script typescript template

This is a skeleton project for apps script projects.

[google/clasp](https://github.com/google/clasp) can upload and transpile _.ts files to _.gs files. This project enphasis developer's experience, and left the real transpile things to clasp itself.

Toolset of this project is relatively simple and up-to-date compared to [Typescript-React-Google-Apps-Script](https://github.com/52inc/TypeScript-React-Google-Apps-Script), but it uses babel & webapck to transpile all things before push to cloud.

## install/setup

1. clone the project
2. rewrite package.json (npm init)
3. npm install
4. rewrite(or remove) .clasp.json for your script project

## notes

[google apps script with clasp](https://docs.google.com/document/d/1AlalmVLR29X6ZSjXuHGTaJ26jGWiTIPLdknZQeH_cpI/edit?usp=sharing) Chinese note

It should be fine with \*.gs files. But parsing HTML files with typescript might not work.

Any ideas and PR are welcome.
