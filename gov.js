let errors = helper.runAnalysis(workingDirectory);

    helper.deleteWorkingDirectory(workingDirectory + "\\**");

    if (errors) {
      const status = "error";
      helper.setStatus(context, status, "There are some errors");
    }
    else {
      const status = "success";
      helper.setStatus(context, status, "Check is now completed");
    }
  })
}
