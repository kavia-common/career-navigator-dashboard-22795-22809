#!/bin/bash
cd /home/kavia/workspace/code-generation/career-navigator-dashboard-22795-22809/frontend_dashboard
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

