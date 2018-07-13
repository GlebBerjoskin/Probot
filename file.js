async function handlePullRequest(context) {
    setStatus(context, "pending", "Running analysys")
      .then(
        
          const { title, html_url: htmlUrl, head } = context.payload.pull_request;
  
          let workingDirectory = helper.getWorkingDirectory(head.sha);
  
          helper.runGit(context.payload.pull_request.head.repo.full_name, context.payload.pull_request.head.ref, workingDirectory);
  
          let errors = helper.runAnalysis(workingDirectory);
  
          helper.deleteWorkingDirectory(workingDirectory);
  
          if(errors){
          const status = "error";
          setStatus(context, status, "There are some errors");
          }
          else{
            const status = "success";
            setStatus(context, status, "Check is now completed");
          }
        }
      )
  }