# recursive-background-remover
Small nodejs project that removes backgrounds from images inside of nested windows directories using imgly's AI background removal tool.

# How does it work?
The algorithm will traverse all the folders and sub-folders of the `assets/arquivo` folder inside of the root of the app (if the folder doesn't exist you can go ahead and creat it manually) and run imgly's background removal AI in all images found;

# How to run it?
1. Clone the respository and cd into it;
2. Make sure you are using node 18.18.0;
3. Run `yarn`;
4. Place your images/folders with images into the `assets/arquivo` directory;
5. Run `yarn start:dev`
6. Your images without background will be inside of a newly created folder called `output`;
