#!/bin/bash

# Run Angular build
echo "Building Angular project..."
ng build --configuration production

# Copy the build files to Joomla directory
echo "Copying files to Joomla directory..."
cp -R dist/angular-bie/browser/* /opt/wwwroot/test82.bie-paris.local/administrator/components/com_bie_members/media/angular/

# Confirmation
echo "Angular files have been successfully deployed to Joomla."
